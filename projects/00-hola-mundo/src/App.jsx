import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

    const addAtExample = (text) => `@${text}`;

    const pheralb = { userName: 'pheralb', isFollowing: true };

    return (
        <section>
            <TwitterFollowCard userName="midudev" name="" initialIsFollowing={false}>
                Miguel Angel Durán
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk" initialIsFollowing={true}>
                Elon Musk
            </TwitterFollowCard>
            <TwitterFollowCard { ... pheralb}>
                Pablo Hernandez
            </TwitterFollowCard>
        </section>
    )
}