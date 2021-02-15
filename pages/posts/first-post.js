import Link from 'next/link'

export default function FirstPost(){
    return(<>
        <h1>Coucou</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque qui provident quis? Totam incidunt cum provident? Voluptas blanditiis facere temporibus maxime corporis tenetur quidem, ipsam recusandae. Ex in voluptates ullam.</p>
        <Link href="/"><a>Home</a></Link>
    </>)
}