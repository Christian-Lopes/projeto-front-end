function ProjectForm() {
  return (
    <div>
      <form>
          <div>
              <input type="text" placeholder="Insira o nome do projeto." />
          </div>
          <div>
              <input type="number" placeholder="insira o orçamento total." />
          </div>
          <select name="categoria_id">
              <option disabled>Selecione a categora</option>
          </select>
          <div>
              <input type="submit" value="Criar projeto" />
          </div>
      </form>
    </div>
  );
}

export default ProjectForm;
