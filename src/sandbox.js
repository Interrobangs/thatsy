
<History items={[
  9.869604401089358, 
  31.006276680299816, 
  97.40909103400242
]} />

const props = {
  items: [
    9.869604401089358, 
    31.006276680299816, 
    97.40909103400242
  ]
}

function History(props) {
  return <ul>
    props.items.map(
      function (item) {
  return <li>{item}</li>
}
    )
  </ul>
}


