import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import MultiRangeSlider from "./common/c8-SuperDoubleRange/MultiRangeSlider";

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    // сделать так чтоб value1 изменялось
                    onChangeRange={(value) => setValue1(value)}
                />
            </div>

            {/*<div>*/}
            {/*    <span>{value1}</span>*/}
            {/*    <SuperDoubleRange*/}
            {/*        // сделать так чтоб value1 и value2 изменялось*/}
            {/*    />*/}
            {/*    <span>{value2}</span>*/}
            {/*</div>*/}

            <div>
                <MultiRangeSlider min={0} max={100} onChange={({ min, max }: { min: number; max: number }) =>
                    console.log(`min = ${min}, max = ${max}`)} />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
