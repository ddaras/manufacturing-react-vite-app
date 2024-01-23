function Page({ title, children }) {

  return (
    <div>
      <h1 className="mb-5">{title}</h1>

      {children}
    </div>
  );
}



export default Page;