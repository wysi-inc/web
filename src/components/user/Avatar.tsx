function Avatar(p: { id: number }) {
    return <img data-src={`https://a.ppy.sh/${p.id}`} class="rounded-lg aspect-square" alt="avatar" />
}

export default Avatar;
