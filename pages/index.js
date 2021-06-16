import Layout from "../components/layout";
import Profile from "../components/profile";
import Projects from "../components/projects";

export default function Home() {
  return (
    <Layout>
      <Profile></Profile>
      <Projects></Projects>
    </Layout>
  );
}
