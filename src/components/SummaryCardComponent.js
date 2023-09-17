import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';



/** Notes:
 * - We are using Material UI for UI components
 */
function SummaryCardComponent() {

    const [years, setYears] = useState(1);

    const handleChange = (event) => {
        setYears(event.target.value );
    };


    // const cardGraphResponsiveWidth = "sm:w-52 md:w-60 lg:w-72 xl:w-72"
    const cardGraphResponsiveWidth = "sm:w-52 md:w-1/4"


    const graphBoxStyle = {
        width: '24.3%'
    }

    const innerBoxClass = "h-full border-solid border-b-2 border-indigo-300/75 "

    return (
    <div className='w-[100%]'>

        {/* ----------------- */}

        <div className="w-auto ">

            <div className="border-r border-b border-l border-grey-light 
            justify-between lg:border-l-0 lg:border-t 
            lg:border-grey-light bg-white rounded-b 
            lg:rounded-b-none lg:rounded-r py-4 pl-3 pr-0 flex leading-normal">
                
                {/* the text content regarding the company */}
                <div className="company-name flex mb-1 items-center leading-normal gap-10">
                    <div className="border-solid border-b-2 border-indigo-300/75 text-black font-bold text-xl mb-2">Company Name</div>
                    <p className="border-solid border-b-2 border-indigo-300/75 text-grey-darker text-base text-xl mb-2 ml-2">CNA</p>
                </div>


                <div className="company-info ml-10 ">
                    {/* <img className="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_imyearss/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink"/> */}
                    <div className="flex flex-wrap justify-end text-center text-sm">
                        <div className='text-center px-4 ml-2 border-solid border-2 border-indigo-300/75 rounded'>Volume: 102 million</div>
                        <div className='text-center px-4 ml-2 border-solid border-2 border-indigo-300/75 rounded'>Market Cap: 5</div>
                        <div className='text-center px-4 ml-2 border-solid border-2 border-indigo-300/75 rounded'>Year founded: 1995</div>
                    </div>
                </div>

            </div>
        </div>

        {/* ----------------- */}

        <div className="w-auto md:flex justify-between h-40 lg:h-52">


            <div className={" flex-none rounded-t lg:rounded-t-none " + 
            "border-solid border-2 border-indigo-300/75 " +
            "lg:rounded-l text-center overflow-hidden " }
            title="graph-box" style={graphBoxStyle}>

                <div className='sm:h-[78%] lg:h-[78%]'>
                    <div className={" " + innerBoxClass}></div>
                    <div className='bottom-card-control m-2'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">choose view</InputLabel>
                            <Select className='sm:h-[23px] lg:h-[30px]'
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={years}
                            label="choose view"
                            onChange={handleChange}
                            >
                                <MenuItem value={1}>One Year</MenuItem>
                                <MenuItem value={5}>5 Years</MenuItem>
                                <MenuItem value={-1}>nope</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    
                </div>

            </div>



            <div className={" flex-none rounded-t lg:rounded-t-none "+
            "border-solid border-2 border-indigo-300/75 "+
            "lg:rounded-l text-center overflow-hidden "   }
            title="graph-box" style={graphBoxStyle}>                
            </div>

            <div className={" flex-none rounded-t lg:rounded-t-none "+
            "border-solid border-2 border-indigo-300/75 "+
            "lg:rounded-l text-center overflow-hidden "   }
            title="graph-box" style={graphBoxStyle}>
            </div>

            <div className={" flex-none rounded-t lg:rounded-t-none "+
            "border-solid border-2 border-indigo-300/75 "+
            "lg:rounded-l text-center overflow-hidden "   }
            title="graph-box" style={graphBoxStyle}>
                
            </div>

            

        </div>

    </div>
  )
}

export default SummaryCardComponent

