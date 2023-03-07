import Card from './Card';

export default function Cards(props) {
   const { characters } = props;
   const onClose = () => window.alert('Emulamos que se cierra la card')
   return <div>
      {
         props.characters.map((persona)=>{
            return <Card name={persona.name} species={persona.species} gender={persona.gender} image={persona.image} onClose={onClose}/>;
         })
      }
   </div>;
}
