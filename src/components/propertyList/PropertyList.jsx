import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("/places/countByType");

  const images = [
		"https://img.freepik.com/free-vector/moscow-concept-illustration_114360-5886.jpg?w=826&t=st=1682920793~exp=1682921393~hmac=be17c4146dcbc3e887174a9064f1722ee8938d7307ecca991b3f971e974c9851",
		"https://img.freepik.com/free-vector/abstract-art-concept-illustration_114360-5495.jpg?w=826&t=st=1682921287~exp=1682921887~hmac=6c46963c3aff9162770337938fe385ec046b538a72d1281574c159b11345533e",
		"https://img.freepik.com/free-vector/art-lover-concept-illustration_114360-1049.jpg?w=826&t=st=1682921264~exp=1682921864~hmac=df1e0c6a5633a311722c9b2fdde82b46c863b44aceb0c41fdfbe31646101d91d",
		"https://img.freepik.com/free-vector/ciudad-de-mexico-concept-illustration_114360-3439.jpg?w=826&t=st=1682921232~exp=1682921832~hmac=0be27c6ae922423402a6c4ad09103070f078d7a60a30a3abe469479172f564fe",
		"https://img.freepik.com/free-vector/sport-family-concept-illustration_114360-8927.jpg?w=826&t=st=1682921055~exp=1682921655~hmac=b50fad8fbea4b44ebba535e87779a250eb7fbf42bc57d7af54b8aa046e2c4f56",
  ];
  return (
    <div className="pList">
      {loading ? (
        "Загрузка, пожалуйста подождите"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;