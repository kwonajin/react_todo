import './Profile.css'

export default function Profile(prop) {
  return (
    <>
      <h1>{prop.user.name}</h1>
      <img
        className="avatar"
        src={prop.user.imageUrl}
        alt={'Photo of ' + prop.user.name}
        style={ {
          width: prop.user.imageSize,
          height: prop.user.imageSize
        } }
      />
    </>
  );
}
