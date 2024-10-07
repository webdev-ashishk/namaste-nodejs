function Forms() {
  return (
    <div>
      <h1>form is working ..</h1>
      <form
        action="http://localhost:3000/uploadImage"
        method="post"
        enctype="multipart/form-data"
        className="Forms"
      >
        <input type="file" name="avatar" />
        <button
          type="submit"
          style={{
            // marginLeft: '200px',
            padding: '10px',
            margin: '20px',
            backgroundColor: 'lightgreen',
          }}
        >
          Click to Upload
        </button>
      </form>
    </div>
  );
}
export default Forms;
