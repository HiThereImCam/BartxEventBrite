import React from 'react';

function FormTable(props){
    /**
     * props = allStations
     */
    console.log(props.data)
    return(
        <table className="form__table">
            <div className="form__table-parentDiv">
                <thead>
                    <tr>
                        <th className="form__table-header">Departing Station</th>
                        <th className="form__table-header">Arriving Station</th>
                        <th colSpan={2} className="form__table-header">Departure Time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map( (stationIndex) => {
                            // console.log(stationIndex);
                            let cells = [];

                            for(let i = 1; i < stationIndex.length; i++){
                                cells.push(
                                    <React.Fragment>
                                        <td className="form__table-stations"> {stationIndex[i].station} </td>
                                        <td className="form__table-stations"> {stationIndex[i].destination} </td>
                                        <td className="form__table-arrivals"> {stationIndex[i].firstArrival} </td>
                                        <td className="form__table-arrivals">  {stationIndex[i].secondArrival} </td>
                                    </React.Fragment>
                                );
                            }
                            
                            

                            return <tr className="form__table-row" >{ cells }</tr>
                        })
                    }
                        
                    
                </tbody>
            </div>
            
        </table>
    )
}

export default FormTable;

