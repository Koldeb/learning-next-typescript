import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../../components/layout'

const aze = 'coucou'

export default function FirstPost(){
    return(
    <Layout>
        <Head>
            <title>First Post</title>
        </Head>
        <Image
            src='/images/profil.jpg'
            alt='Photo de Profil'
            width={250}
            height={250}
        />
        <h1>{aze}</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque qui provident quis? Totam incidunt cum provident? Voluptas blanditiis facere temporibus maxime corporis tenetur quidem, ipsam recusandae. Ex in voluptates ullam.</p>
        <Link href="/"><a>Home</a></Link>
    </Layout>
    )
}