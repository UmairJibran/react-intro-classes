// the below snippet will create a parent tag with class "class1", "class2", "class3"
// and id of id3 with 5 child tags with child

//  tag.class1.class2.class3#id1>tag.child*5
const AddButton = () => {
  return (
    <>
      <div className="text-slate-900 text-2xl font-semibold p-1 bg-indigo-300 rounded-md my-5 w-2/12 mx-auto hover:bg-indigo-400 hover:cursor-pointer">
        Add Button
      </div>
    </>
  );
};

export default AddButton;
