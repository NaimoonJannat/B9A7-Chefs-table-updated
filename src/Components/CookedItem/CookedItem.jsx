const CookedItem = ({CookedItem, handlePreparedItem}) => {
    const {recipe_name, preparing_time, calories} = CookedItem;
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table my-2">
    
    <tbody className="text-base text-[#878787]">
      {/* row 1 */}
      <tr className="bg-[#0be58a19]">
        <td>{recipe_name}</td>
        <td>{preparing_time}</td>
        <td>{calories}</td>
        <th><button onClick={() => handlePreparedItem(CookedItem)} className="btn rounded-full bg-[#0BE58A] text-black">
            Preparing</button></th>
      </tr>
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default CookedItem;