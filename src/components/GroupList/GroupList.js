import { useContext, useEffect ,useState , useMemo} from 'react' ;
import styles from "./groupList.module.css";


import { CustomLink } from '../commonComponents/CustomLink/CustomLink';
import { GroupCard } from '../GroupCard/GroupCard';


import {AuthContext} from "../../contexts/authContext"
import { candidateToGroup, getAllGroups } from '../../services/groupService';

export function GroupList() {
    const{ user }  = useContext(AuthContext); 
    const [groups , setGroups] = useState([]);

    useEffect(()=>{
         getAllGroups().then((value) =>{
            setGroups(value); 
         }).catch((err) => console.log(err)); 
    },[])
async function candidate(groupId){
    try{
       await candidateToGroup(groupId);
       setGroups((oldGroups) => {
        const groupsWithoutCurrGroup = oldGroups.filter(g => g.id !== groupId) ;
        const currentGroup = oldGroups.find(g => g.id === groupId) ; 
        currentGroup.canidates.push({id : user._id}) ; 
        return [...groupsWithoutCurrGroup , currentGroup] ; 
       })
    }catch(err){
        console.log(err);
    }
}

    return (
<div>
    <div className={styles["sub-navigate-div"]} >
    <h3 className={styles.h3}>Find your friend in this gorup!</h3>
<div className={styles["create-group-div"]}>
    <CustomLink text={"Create new group"} to={"/groups/create"}/>
</div>
</div>
<div className={styles["group-div"]}>
    {groups.map((g) => {
        return (
            <GroupCard 
            name={g.name}
            id={g.id}
            location={g.location} 
            numOfMembers={g.members.length} 
            candidate={candidate}
            preferentType={g.preferentType}
            key={g.id}
            isMember={g.members.find(m => m.id === user._id)} 
            isCandidate={g.canidates.find(c => c.id === user._id)}
            />
        )
    })

    }
</div>
</div>
    )
}