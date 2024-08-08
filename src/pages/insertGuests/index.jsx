// src/pages/insertGuests/index.jsx
import React, { useState, useEffect } from 'react';
import { Box, Center, Input, Text, Button, FormControl, FormLabel } from "@chakra-ui/react";

function InsertGuests() {
    const [owner, setOwner] = useState('');
    const [name, setName] = useState('');
    const [referency, setReferency] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [dueDate, setDueDate] = useState('');
    const [escorts, setEscorts] = useState([{ name: '', age: '', confirmed: false, present: false }]);

    const handleEscortChange = (index, field, value) => {
        const newEscorts = [...escorts];
        newEscorts[index][field] = value;
        setEscorts(newEscorts);
    };

    const handleAddEscort = () => {
        setEscorts([...escorts, { name: '', age: '', confirmed: false, present: false }]);
    };

    const handleRemoveEscort = (index) => {
        const newEscorts = escorts.filter((_, i) => i !== index);
        setEscorts(newEscorts);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const guest = {
            owner,
            name,
            referency,
            email,
            age,
            phone,
            confirmed,
            dueDate,
            escorts,
        };

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guest`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(guest),
            });

            if (response.ok) {
                alert('Convidado inserido com sucesso!');
                setOwner('');
                setName('');
                setReferency('');
                setEmail('');
                setAge('');
                setPhone('');
                setConfirmed(false);
                setDueDate('');
                setEscorts([{ name: '', age: '', confirmed: false, present: false }]);
            } else {
                alert('Erro ao inserir convidado.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao inserir convidado.');
        }
    };

    return (
        <>
            <Center mt={5}>
                <Text fontSize={"xx-large"}>Inserir Convidado</Text>
            </Center>
            <Center mb={5}>
                <Box width={"80%"} mt={5} bgColor={"#FBB6CE"} p={5} borderRadius={"md"}>
                    <form onSubmit={handleSubmit}>
                        <FormControl id="owner" mb={4}>
                            <FormLabel>Noiva ou Noivo</FormLabel>
                            <Input
                                type='text'
                                value={owner}
                                onChange={(e) => setOwner(e.target.value)}
                                placeholder='Digite se o convidado é da noiva ou do noivo'
                                bgColor={"#f1f1f1"}
                                required
                            />
                        </FormControl>
                        <FormControl id="name" mb={4}>
                            <FormLabel>Nome</FormLabel>
                            <Input
                                type='text'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Digite o nome do convidado'
                                bgColor={"#f1f1f1"}
                                required
                            />
                        </FormControl>
                        <FormControl id="referency" mb={4}>
                            <FormLabel>Referência</FormLabel>
                            <Input
                                type='text'
                                value={referency}
                                onChange={(e) => setReferency(e.target.value)}
                                placeholder='Digite a referência do convidado'
                                bgColor={"#f1f1f1"}
                            />
                        </FormControl>
                        <FormControl id="email" mb={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                type='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Digite o email do convidado'
                                bgColor={"#f1f1f1"}
                            />
                        </FormControl>
                        <FormControl id="age" mb={4}>
                            <FormLabel>Idade</FormLabel>
                            <Input
                                type='number'
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder='Digite a idade do convidado'
                                bgColor={"#f1f1f1"}
                            />
                        </FormControl>
                        <FormControl id="phone" mb={4}>
                            <FormLabel>Telefone</FormLabel>
                            <Input
                                type='text'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                placeholder='Digite o telefone do convidado'
                                bgColor={"#f1f1f1"}
                            />
                        </FormControl>
                        <FormControl id="confirmed" mb={4}>
                            <FormLabel>Confirmado</FormLabel>
                            <Input
                                type='checkbox'
                                checked={confirmed}
                                onChange={(e) => setConfirmed(e.target.checked)}
                                bgColor={"#f1f1f1"}
                            />
                        </FormControl>
                        <FormControl id="dueDate" mb={4}>
                            <FormLabel>Data de vencimento</FormLabel>
                            <Input
                                type='date'
                                value={dueDate}
                                onChange={(e) => setDueDate(e.target.value)}
                                bgColor={"#f1f1f1"}
                            />
                        </FormControl>
                        <FormControl mb={4}>
                            <FormLabel>Acompanhantes</FormLabel>
                            {escorts.map((escort, index) => (
                                <Box key={index} mb={4} p={2} border={"1px solid #111"} borderRadius={"md"}>
                                    <FormControl id={`escort-name-${index}`} mb={2}>
                                        <FormLabel>Nome</FormLabel>
                                        <Input
                                            type='text'
                                            value={escort.name}
                                            onChange={(e) => handleEscortChange(index, 'name', e.target.value)}
                                            placeholder='Nome do acompanhante'
                                            bgColor={"#f1f1f1"}
                                            required
                                        />
                                    </FormControl>
                                    <FormControl id={`escort-age-${index}`} mb={2}>
                                        <FormLabel>Idade</FormLabel>
                                        <Input
                                            type='number'
                                            value={escort.age}
                                            onChange={(e) => handleEscortChange(index, 'age', e.target.value)}
                                            placeholder='Idade do acompanhante'
                                            bgColor={"#f1f1f1"}
                                        />
                                    </FormControl>
                                    <FormControl id={`escort-confirmed-${index}`} mb={2}>
                                        <FormLabel>Confirmado</FormLabel>
                                        <Input
                                            type='checkbox'
                                            checked={escort.confirmed}
                                            onChange={(e) => handleEscortChange(index, 'confirmed', e.target.checked)}
                                            bgColor={"#f1f1f1"}
                                        />
                                    </FormControl>
                                    <FormControl id={`escort-present-${index}`} mb={2}>
                                        <FormLabel>Presente</FormLabel>
                                        <Input
                                            type='checkbox'
                                            checked={escort.present}
                                            onChange={(e) => handleEscortChange(index, 'present', e.target.checked)}
                                            bgColor={"#f1f1f1"}
                                        />
                                    </FormControl>
                                    <Button colorScheme='red' onClick={() => handleRemoveEscort(index)}>
                                        Remover Acompanhante
                                    </Button>
                                </Box>
                            ))}
                            <Button mt={4} colorScheme='blue' onClick={handleAddEscort}>
                                Adicionar Acompanhante
                            </Button>
                        </FormControl>
                        <Center>
                            <Button type='submit' colorScheme='teal'>
                                Inserir Convidado
                            </Button>
                        </Center>
                    </form>
                </Box>
            </Center>
        </>
    );
}

export default InsertGuests;
