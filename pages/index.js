import Layout from "../components/Layout/Layout";
import Profile from "../components/Profile/Profile";
import Projects from "../components/Projects/Projects";

export default function Home() {
  return (
    <Layout>
      <Profile></Profile>
      <Projects></Projects>
    </Layout>
  );
}
