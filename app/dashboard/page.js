import Dashboard from "@/components/Dashboard";
import Main from "@/components/Main";

export const metadata = {
  title: "Mood Tracker ⋅ Dashboard",
};

const DashboardPage = () => {
  return (
    <Main>
      <Dashboard />
    </Main>
  );
};

export default DashboardPage;
