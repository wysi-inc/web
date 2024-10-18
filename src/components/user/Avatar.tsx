function Avatar(p: { id: number }) {
    return <img loading="lazy" src={`https://a.ppy.sh/${p.id}`} class="aspect-square rounded-lg" alt="avatar" />
}

export default Avatar;
