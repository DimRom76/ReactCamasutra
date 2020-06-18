import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={s.img}
          src="https://d2kecqmfs75hwg.cloudfront.net/media/zoo/images/praia-do-barranco-das-canas_4d99f19e19702a07a9bb6191b30fa565.jpg"
        ></img>
      </div>
      <div className={s.descriptionBlock}>ava + descriptions</div>
    </div>
  );
};

export default ProfileInfo;
