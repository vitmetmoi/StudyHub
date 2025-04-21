"use client"
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import './Section1.scss'
import _ from "lodash"
export default function Section1() {

    interface defaultCounterState {
        comunityMembers: number,
        studySessions: number,
        studyGoal: number,
        countries: number,
        positiveReviews: number
    }


    const [counterState, setCounterState] = useState<defaultCounterState>({
        comunityMembers: 0,
        studySessions: 0,
        studyGoal: 0,
        countries: 0,
        positiveReviews: 0
    })

    // console.log('coutnerState', counterState)


    useEffect(() => {
        handleTriggerCalcNumberEffect();
    }, [])

    useEffect(() => {
        handleTriggerCalcNumberEffect();
    }, [counterState])

    const handleTriggerCalcNumberEffect = () => {
        console.log('trieer')
        handleCalcNumberEffect('comunityMembers', 1, 1);
        if (counterState.comunityMembers === 1) {
            handleCalcNumberEffect('studySessions', 1, 19);
        }
        if (counterState.studySessions === 19) {
            handleCalcNumberEffect('studyGoal', 1, 4);
        }
        if (counterState.studyGoal === 4) {
            handleCalcNumberEffect('countries', 1, 215);
        }
        if (counterState.countries === 215) {
            handleCalcNumberEffect('positiveReviews', 0.1, 4.8);
        }

    }

    const handleCalcNumberEffect = (name: keyof defaultCounterState, counter: number, target: number) => {
        let _couterState: defaultCounterState = _.cloneDeep(counterState);

        if (_couterState[name] < target) {

            setTimeout(() => {
                _couterState[name] = _couterState[name] + counter;
                setCounterState(_couterState);
            }, target < 20 === true ? 25 : 5);

        }

    }



    return (
        <>
            <div className='section1-container'>
                <h5 className='header-top'>Our <span>student community</span> is <span>more than one million</span> strong</h5>
                <h5>(and this is just the beginning)</h5>

                <div className='couter-group'>

                    <div className='item'>
                        <span className='couter'>+{counterState.comunityMembers}M</span>
                        <span className='text'>community members</span>
                    </div>

                    <div className='item'>
                        <span className='couter'>+{counterState.studySessions}M</span>
                        <span className='text'>study sessions</span>
                    </div>

                    <div className='item'>
                        <span className='couter'>+{counterState.studyGoal}M</span>
                        <span className='text'>study goals reached</span>
                    </div>

                    <div className='item'>
                        <span className='couter'>+{counterState.countries}</span>
                        <span className='text'>countries</span>
                    </div>

                    <div className='item'>
                        <span className='couter'>{(counterState.positiveReviews).toFixed(1)}/5</span>
                        <span className='text'>positive reviews</span>
                    </div>


                </div>
            </div>
        </>
    )
}