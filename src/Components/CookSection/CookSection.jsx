import { useState } from 'react';
import CookedItem from '../CookedItem/CookedItem'
import Preparing from '../Preparing/Preparing';

const CookSection = ({cook}) => {
    const [preparedItem, setPreparedItem] = useState([]);
    const handlePreparedItem = food =>{
        // console.log("Preparing...");
        const newPreparedItem = [...preparedItem,food];
        setPreparedItem(newPreparedItem);
    }

    const remainingCook = cook.filter(item => !preparedItem.some(prepared => prepared.id === item.id));

    return (
        <div className="border-[#28282833] lg:w-1/3 p-5 rounded-lg text-center">
            <h2 className="text-2xl font-semibold">Want To Cook: {remainingCook.length} </h2>
            <table className="table">
                {/* head */}
    <thead className="text-base text-[#878787] text-left">
      <tr>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th>  </th>
        <th>  </th>
      </tr>
    </thead>
            </table>
            {
        remainingCook.map(item => <CookedItem key={item.id} handlePreparedItem={handlePreparedItem}
        CookedItem={item} ></CookedItem>)
    }
    <Preparing preparedItem={preparedItem}></Preparing>
        </div>
    );
};

export default CookSection;