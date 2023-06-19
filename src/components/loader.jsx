import  React  from "react";
import MoonLoader from "react-spinners/ClipLoader";

function loader(){

    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    const override= css`
        display: "block";
        margin: "0 auto";
        borderColor: "red"
     ` ;
return (
    <div>

<MoonLoader
        color={color}
        loading={loading}
        css=''
        size={80}
      />
    </div>
)

}

export default loader