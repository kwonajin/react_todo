import Profile from './Profile';
const user = [
  {
    id: NaN,
    name: "Hedy Lamarr1",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
  },
  {
    id: "Hedy Lamarr2",
    name: "Hedy Lamarr2",
    imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90
  }
];

export default  function ConditionTest() {
  return (
    <>
      {user.map(
        (userInfo) =>
          userInfo.id && <Profile user={userInfo} key={userInfo.id} />
      )}
    </>
  );
}
