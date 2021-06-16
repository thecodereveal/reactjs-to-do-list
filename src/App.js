import logo from './logo.svg';
import './App.css';
import { EditItcon } from './components/Icons/EditIcon';
import { CompleteIcon } from './components/Icons/CompleteIcon';
import { SeachBar } from './components/SearchBar';
import { PlusIcon } from './components/Icons/PlusIcon';
import styled from 'styled-components';
import { CheckBox } from './components/CheckBox';
import { useState } from 'react';
import { Task } from './components/Task';




const CheckBoxComponent=styled.div`
  display:flex;
  margin:20px;
`;

const TaskListComponet=styled.div`
  margin:20px;
`;


const STATUS_LIST={
  COMPLETED:'COMPLETED',
  ACTIVE:'ACTIVE',
  DELETED:'DELETED'
}


const data=[
  {
    id:1,
    title:'Prepare Report',
    status:STATUS_LIST.ACTIVE,
  },
  {
    id:2,
    title:'Edit Video',
    status:STATUS_LIST.ACTIVE,
  },
  {
    id:3,
    title:'Work-out 30 min',
    status:STATUS_LIST.COMPLETED,
  },
  {
    id:4,
    title:'Schedule a meeting for Project',
    status:STATUS_LIST.COMPLETED,
  }
]



function App() {

  const [checkBoxStates,setCheckBoxStates]=useState([
    {
      name:"ALL",
      checked:false,
      disabled:false,
      title:"ALL"
    },
    {
      name:STATUS_LIST.ACTIVE,
      checked:false,
      disabled:false,
      title:"Active"
    },
    {
      name:STATUS_LIST.COMPLETED,
      checked:false,
      disabled:false,
      title:"Completed"
    }
  ]);

  const [taskList,setTaskList]=useState([]);


  const filterTaskList=(name)=>{

    let existingTasks=[...data];

    let taskList=[]
    if(name===STATUS_LIST.COMPLETED){
      taskList=existingTasks=existingTasks.filter((item)=> item.status===STATUS_LIST.COMPLETED); 
    }
    else if(name===STATUS_LIST.ACTIVE){
      taskList=existingTasks=existingTasks.filter((item)=> item.status===STATUS_LIST.ACTIVE);
    }
    else if(name==='ALL'){
      taskList=existingTasks;
    }
    setTaskList(taskList);

  }

  const handleChangeInput=(evt,index)=>{
    const target=evt.target;
  
    //console.log(target.name);
    //console.log(target.checked);
  
    if(target.checked){
      //disable others

      let existingState=[...checkBoxStates];

      existingState.map((item,key)=>{
        existingState[key].disabled=true;

      });

      existingState[index].checked=true;
      existingState[index].disabled=false;

      setCheckBoxStates(existingState);

      //filter Records
      filterTaskList(target.name);


    }
    else{
      //enable all
      let existingState=[...checkBoxStates];

      existingState.map((item,key)=>{
        existingState[key].disabled=false;

      });

      existingState[index].checked=false;

      setCheckBoxStates(existingState);

      setTaskList([]);

    }
  }
  
  const HeaderWrapper=styled.div`
    display:flex;
  `;

  const AddTaskWrapper=styled.div`

  margin-top:10px;
  margin-left:20px;

  @media only screen and (max-width: 728px) {
    margin-left:5px;
  }
  `;

  return (
    <div className="mainapp">
      {/* App Title */}
      <p className="title" >My To-Do List</p>
      <HeaderWrapper>
      <SeachBar />
      <AddTaskWrapper>
      <PlusIcon />
      </AddTaskWrapper>
      </HeaderWrapper>

      {/* Check Box component */}

      <CheckBoxComponent>
        {/* <CheckBox title="ALL" isChecked={true} isDisabled={false} onHandleChange={(evt)=> handleChangeInput(evt)} /> */}
        {checkBoxStates.map((item,index)=>{
          return <CheckBox name={item.name} key={index} title={item.title} isChecked={item.checked} isDisabled={item.disabled} onHandleChange={(evt)=> handleChangeInput(evt,index)} />
        })}
      </CheckBoxComponent>


      {/* Task List Component */}

        <TaskListComponet>
          {/* <Task label={`Task 1`} completed={false}/> */}


          {
            taskList.map((item,index)=>{
              return <Task key={index} completed={item.status===STATUS_LIST.COMPLETED?true:false} label={item.title}/>
            })
          }

        </TaskListComponet>





    </div>
  );
}

export default App;
