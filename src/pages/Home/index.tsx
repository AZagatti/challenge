import React, { useState, useEffect, useCallback } from "react";
import { FiPlusSquare, FiEdit } from "react-icons/fi";
import { useLocation } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Modal from "../../components/Modal";
import Card from "../../components/Card";

import { Container, Table, ModalButton } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";

interface Clients {
  clienteId: number;
  nome: string;
  documento: string;
  email: string;
  telefone: string;
}

const Home: React.FC = () => {
  const { state } = useLocation<{ token: string }>();

  const [selectedClient, setSelectedClient] = useState(0);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [clients, setClients] = useState<Clients[]>([]);

  const [addNome, setAddNome] = useState("");
  const [addEmail, setAddEmail] = useState("");
  const [addDoc, setAddDoc] = useState("");
  const [addPhone, setAddPhone] = useState("");

  const [editNome, setEditNome] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDoc, setEditDoc] = useState("");
  const [editPhone, setEditPhone] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get<{ clientes: Clients[] }>("clientes", {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        });
        setClients(data.clientes);
      } catch (err) {
        console.log(err.response.data.message);
      }
    })();
  }, [state.token]);

  const handleOpenEdit = useCallback(
    (id: number) => {
      setSelectedClient(id);
      const findedClient = clients.find((client) => client.clienteId === id);
      if (!findedClient) {
        return;
      }
      setEditNome(findedClient?.nome);
      setEditEmail(findedClient?.email);
      setEditDoc(findedClient?.documento);
      setEditPhone(findedClient?.telefone);
    },
    [clients]
  );

  const handleAddClient = useCallback(async () => {
    try {
      const { data } = await api.post(
        "clientes",
        {
          nome: addNome,
          email: addEmail,
          documento: addDoc,
          telefone: addPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      setClients((state) => [...state, data.cliente]);
      alert("Cliente adicionado com sucesso!");
    } catch (err) {
      console.log(err.response.data.message);
    }
  }, [addDoc, addEmail, addNome, addPhone, state.token]);

  const handleEditClient = useCallback(async () => {
    try {
      const { data } = await api.put(
        `clientes/${selectedClient}`,
        {
          nome: editNome,
          email: editEmail,
          documento: editDoc,
          telefone: editPhone,
        },
        {
          headers: {
            Authorization: `Bearer ${state.token}`,
          },
        }
      );
      const newClients = clients.map((client) =>
        client.clienteId === selectedClient ? data.cliente : client
      );
      setClients(newClients);
      alert("Cliente atualizado com sucesso!");
    } catch (err) {
      console.log(err.response.data.message);
    }
  }, [
    clients,
    editDoc,
    editEmail,
    editNome,
    editPhone,
    selectedClient,
    state.token,
  ]);

  return (
    <>
      <Navbar />
      <Container>
        <div>
          <h1>Clientes</h1>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Documento</th>
                <th>E-mail</th>
                <th>Telefone</th>
                <th>
                  <FiPlusSquare onClick={() => setAddModalOpen(true)} />
                </th>
              </tr>
            </thead>
            <tbody>
              {clients.map((client) => (
                <tr key={client.clienteId}>
                  <td>{client.clienteId}</td>
                  <td>{client.nome}</td>
                  <td>{client.documento}</td>
                  <td>{client.email}</td>
                  <td>{client.telefone}</td>
                  <td>
                    <FiEdit onClick={() => handleOpenEdit(client.clienteId)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Container>
      <Modal isOpen={addModalOpen}>
        <Card>
          <ModalButton type="button" onClick={() => setAddModalOpen(false)}>
            X
          </ModalButton>
          <h1>Cadastro</h1>
          <Input
            label="Nome"
            placeholder="Digite seu nome..."
            value={addNome}
            onChange={(e) => setAddNome(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Digite seu email..."
            value={addEmail}
            onChange={(e) => setAddEmail(e.target.value)}
          />
          <Input
            label="Documento"
            placeholder="Digite seu documento..."
            value={addDoc}
            onChange={(e) => setAddDoc(e.target.value)}
          />
          <Input
            label="Telefone"
            placeholder="Digite seu telefone..."
            value={addPhone}
            onChange={(e) => setAddPhone(e.target.value)}
          />
          <Button onClick={() => handleAddClient()}>Cadastrar</Button>
        </Card>
      </Modal>
      <Modal isOpen={Boolean(selectedClient)}>
        <Card>
          <ModalButton type="button" onClick={() => setSelectedClient(0)}>
            X
          </ModalButton>
          <h1>Editar</h1>
          <Input
            label="Nome"
            placeholder="Digite seu nome..."
            value={editNome}
            onChange={(e) => setEditNome(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Digite seu email..."
            value={editEmail}
            onChange={(e) => setEditEmail(e.target.value)}
          />
          <Input
            label="Documento"
            placeholder="Digite seu documento..."
            value={editDoc}
            onChange={(e) => setEditDoc(e.target.value)}
          />
          <Input
            label="Telefone"
            placeholder="Digite seu telefone..."
            value={editPhone}
            onChange={(e) => setEditPhone(e.target.value)}
          />
          <Button onClick={() => handleEditClient()}>Editar</Button>
        </Card>
      </Modal>
    </>
  );
};

export default Home;
