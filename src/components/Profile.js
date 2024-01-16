import { SocialIcon } from "react-social-icons";

function Profile() {
  return (
    <div>
      <img src="https://picsum.photos/200/300" alt="Me" />
      <div>
        <SocialIcon url="https://www.linkedin.com/in/anthony-nguyen-a8b884251/" />
        <SocialIcon url="https://github.com/anthonyng041" />
      </div>
      <div>
        <p>
          Donec erat lacus, mattis vitae porttitor molestie, tristique imperdiet
          nibh. Aenean pharetra lacinia est vitae tincidunt. Aenean pulvinar
          interdum neque ut consectetur. Nunc fringilla porta erat, et efficitur
          nisl rutrum et. Vestibulum fermentum imperdiet pellentesque.
        </p>
      </div>
      <div>
        <p>anthonyng041@gmail.com</p>
      </div>
    </div>
  );
}

export default Profile;
