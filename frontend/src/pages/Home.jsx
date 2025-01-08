
import Hero from "../components/Hero"
import Department from "../components/Department"
import MessageForm from "../components/MessageForm"
const Home = () => {
  return (
    <>
      <div className="min-h-screen min-w-full justify-center  bg-gradient-to-b  from-blue-100 via-purple-100 to-pink-100  items-center p-3 ">
        <div className="flex flex-col absloute md:h-[90vh] md:flex-row items-center justify-between bg-cream-white  w-screen px-6 md:px-12"> {/* min-h-screen */}
          <Hero title={"Welcom to the CareTrack healtcare "} imageUrl={"./rb_2215.png"} />
        </div>
        <div className="  min-w-full justify-center p-4 md:p-10  relative items-center ">
          <Department/>
        </div >
        <MessageForm />

      </div>
    </>
  )
};
export default Home
