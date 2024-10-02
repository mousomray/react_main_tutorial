import React from 'react'
import TodoList from './Todolist';
import Temperature from './Temperature';
import Stopwatch from './Stopwatch';
import WeightConverter from './Weightconverter';
import Toggle from './Toggle';
import Changeobject from './Changeobject';
import Arrayobjectstate from './Arrayobjectstate';
import UpdateArray from './Updatearrayobject';
import Dropdowncountry from './Dropdowncountry';
import Memorycardgame from './Memorycardgame';

const Stateasignmentparent = () => {
    return (
        <>
            <UpdateArray />
            <Arrayobjectstate />
            <Changeobject />
            <Toggle />
            <TodoList />
            <Temperature />
            <Stopwatch />
            <WeightConverter />
            <Dropdowncountry />
            <Memorycardgame />
        </>
    )
}

export default Stateasignmentparent
