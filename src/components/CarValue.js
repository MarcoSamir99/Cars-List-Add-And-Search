import { useSelector } from "react-redux";

function CarValue() {
    const totalCost = useSelector(( {cars: { data, searchTerm}}) => {
        const filterCars = data.filter((car) => {                          //filter the carss again to get summation of listed cars updated
            return car.name.toLowerCase().includes(searchTerm.toLowerCase())
        });

        let cost = 0;
        for(let car of filterCars) {
            cost += car.cost;
        }
        return cost;    //returned cost from the whole carValue function
    })


    return <div className="car-value">
        Total Cost: ${totalCost}
    </div>;
}

export default CarValue;