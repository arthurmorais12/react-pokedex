
const PokemonModal = (props) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 flex justify-center items-center">
      <div className="dark:bg-gray-600 bg-gray-200 w-2/4 h-3/5 absolute rounded-lg">
        {props.children}        
      </div>
    </div>
  );
};

export default PokemonModal;
