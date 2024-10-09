const Title = (p: { title?: string, route?: string }) => (<>
    <script>
        {p.title ?
            `document.title = "${p.title} | wysi";` : null
        }
        {p.route ?
            `history.replaceState({ }, null, '${p.route}');` : null
        }
    </script>
</>);

export default Title;
