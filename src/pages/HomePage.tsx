import Navbar from "../components/Navbar";
import SplitLayout from "../components/SplitLayout";
import ActiveUsers from "../components/ActiveUsers";
import ChatContainer from "../components/ChatContainer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <SplitLayout>
        <ActiveUsers />
        <ChatContainer />
      </SplitLayout>
    </>
  );
};

export default HomePage;
