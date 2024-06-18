const person ={
    name: 'Adhish',
    address:  {
       line:'JM Road ',
       city:'Pune ',
       country:'India',
    },
    profiles:['twitter','LinkedIn','Instagram'],
    printProfile:() =>
    {
        person.profiles.map(
            (profile) => console.log(profile)
        )
    }
}
export default function LearningJavaScript()
{
    return (
        <>
            <div>{person.name}</div>
            <div>{person.address.line}</div>
            <div>{person.address.city}</div>
            <div>{person.address.country}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}