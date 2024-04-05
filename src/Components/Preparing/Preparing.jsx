const Preparing = ({preparedItem}) => {

    const totalTime = preparedItem.reduce((total, item) => total + item.preparing_time, 0);
    const totalCalories = preparedItem.reduce((total, item) => total + item.calories, 0);

    return (
        <div className="border-[#28282833] border-2 p-5 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">Currently Cooking: {preparedItem.length} </h2>
            <table className="table">
                {/* head */}
    <thead className="text-base text-[#878787] text-left">
      <tr>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
      </tr>
    </thead>
    <tbody className="text-base text-[#878787] text-left">
    {preparedItem.map((item, idx) => (
                        <tr key={idx}>
                            <td>{item.recipe_name}</td>
                            <td>{item.preparing_time}</td>
                            <td>{item.calories}</td>
                        </tr>
                    ))}
                    {/* Total row */}
                    <tr>
                        <th>Total</th>
                        <th>{totalTime} Minutes</th>
                        <th>{totalCalories} Calories</th>
                    </tr>
    </tbody>
            </table>
            

        </div>
    );
};

export default Preparing;