import "./ProfilePage.css";
import Topbar from "../../components/JS/Topbar";
import Sidebar from "../../components/JS/Sidebar";
import UserBanner from "../../components/JS/UserBanner";
import CreatePost from "../../components/JS/CreatePost";
import Post from "../../components/JS/Post";
import UserInfo from "../../components/JS/UserInfo";

const ProfilePage = () => {
  return (
    <div className="profile">
      <Topbar />

      <div className="profile__container">
        <Sidebar />
        <div className="profile__user">
          <UserBanner
            banner="https://th.bing.com/th/id/R.aa8ea583288c7010b8ab3e446a4bf29d?rik=piDg01z3HakSVg&pid=ImgRaw&r=0"
            avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
            name="iDiego"
            description="Hi, i'm full Stack Developer"
          />
          <div className="profile__info">
            <div className="profile__posts">
              <CreatePost />

              <div className="profile__post">
                <Post
                  avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  name="iDiego"
                  timestamp={new Date().toUTCString().split(" ")[4]}
                  desc="Hey, it is my first post!"
                  image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  likes={5}
                  comments={5}
                />
                <Post
                  avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  name="iDiego"
                  timestamp={new Date().toUTCString().split(" ")[4]}
                  desc="Hey, it is my first post!"
                  image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  likes={5}
                  comments={5}
                />
                <Post
                  avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  name="iDiego"
                  timestamp={new Date().toUTCString().split(" ")[4]}
                  desc="Hey, it is my first post!"
                  image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  likes={5}
                  comments={5}
                />
                <Post
                  avatar="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  name="iDiego"
                  timestamp={new Date().toUTCString().split(" ")[4]}
                  desc="Hey, it is my first post!"
                  image="https://cdn.discordapp.com/attachments/863856887102701589/892194761958645760/images.png"
                  likes={5}
                  comments={5}
                />
              </div>
            </div>

            <div className="profile__userData" >
              <UserInfo 
                city="Chiquinquirá"
                from="Colombia"
                ship="With Paula"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
