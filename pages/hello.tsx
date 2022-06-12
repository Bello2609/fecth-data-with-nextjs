import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import { GetWelcomeResult, Welcome } from "../types";
import style from "../styles/Home.module.css";
import imageLoader from "../imageLoader";
import Link from "next/link";

const Hello:NextPage<{characters: Welcome[]}> = ({characters})=>{
    return (
        <div className={style.container}>
              <h2>this is from hello page</h2>
                {characters.map(character=>{
                    return(
                        <>
                            <div key={character.id}>
                                <Link href={`/character/${character.id}`}>
                                <a>
                                    <h3>{character.name}</h3>
                                </a>
                                
                                </Link>
                            
                                <Image 
                                loader={imageLoader}
                                unoptimized
                                src={character.image}
                                alt={character.name}
                                width={200}
                                height={200}
                                />
                            </div>
                        </>
                        
                    );
                })}
        </div>
      
    );
}
export const getStaticProps: GetStaticProps = async (context) => {
    const res  = await fetch("https://rickandmortyapi.com/api/character");
    const { results }: GetWelcomeResult = await res.json();
    return {
        props: {
            characters: results
        }
    }
}
export default Hello;

