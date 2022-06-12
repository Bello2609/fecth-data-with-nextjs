import { stringify } from "querystring";
import imageLoader from "../../imageLoader";
import { GetWelcomeResult, Welcome } from "../../types";
import Image from "next/image";
import { GetServerSideProps } from "next";

const characterPage = ({character}: {character: Welcome})=>{
    return (
        <>
            <h2>{character.name}</h2>
            <Image 
            src={character.image}
            alt={character.name}
            loader={imageLoader}
            unoptimized
            width="200"
            height="200"
            />
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async(context)=>{
    const res = await fetch(`https://rickandmortyapi.com/api/character/${context.query.id}`);
    const character = await res.json();
    return {
        props: {
            character
        }
    }
}
export default characterPage;