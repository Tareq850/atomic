import {
  createContext,
  useContext,
  useState,
} from "react";

const TabsContext = createContext(null);

export default function Tabs({ children, defaultValue = "profile" }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        setActiveTab,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
}

function TabsTrigger({ children, value }) {
  const { activeTab, setActiveTab } = useContext(TabsContext);

  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`
        px-md
        py-sm
        rounded-md
        font-medium
        transition
        duration-200

        ${
          isActive
            ? "bg-primary text-white"
            : "bg-secondary text-white opacity-70"
        }

        hover:opacity-90
      `}
    >
      {children}
    </button>
  );
}

function TabsContent({ children, value }) {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) {
    return null;
  }

  return (
    <div className="mt-lg">
      {children}
    </div>
  );
}

Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;