function SeuNome({ setNome }) {
  return (
    <div>
        <input
          type="text"
          name="name"
          placeholder="Informe o seu nome!"
          onChange={(e) => setNome(e.target.value)}
        ></input>
    </div>
  )
}

export default SeuNome;
