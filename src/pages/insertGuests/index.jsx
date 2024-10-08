import React, { useState, useEffect } from 'react';
import { Box, Center, Input, Text, Button, FormControl, FormLabel, Checkbox } from "@chakra-ui/react";
import { useRouter } from 'next/router';

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

    const router = useRouter();
    const { query } = router;

    useEffect(() => {
        if (query.id) {
            setOwner(query.owner || '');
            setName(query.name || '');
            setReferency(query.referency || '');
            setEmail(query.email || '');
            setAge(query.age || '');
            setPhone(query.phone || '');
            setConfirmed(query.confirmed === 'true');
            setDueDate(query.dueDate || '');
            setEscorts(JSON.parse(query.escorts || '[]'));
        }
    }, [query]);

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

    // Format phone number
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Adiciona parênteses em volta dos dois primeiros dígitos
        value = value.replace(/(\d)(\d{4})$/, '$1-$2'); // Adiciona o traço entre o quinto e o sexto dígito
        setPhone(value);
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
            let response;
            if (query.id) {
                // Update existing guest
                response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guests/${query.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(guest),
                });
            } else {
                // Insert new guest
                response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guest`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(guest),
                });
            }

            if (response.ok) {
                alert(query.id ? 'Convidado atualizado com sucesso!' : 'Convidado inserido com sucesso!');
                setOwner('');
                setName('');
                setReferency('');
                setEmail('');
                setAge('');
                setPhone('');
                setConfirmed(false);
                setDueDate('');
                setEscorts([{ name: '', age: '', confirmed: false, present: false }]);
                router.push('/listguests'); // Redirect to guest list page
            } else {
                alert('Erro ao inserir / atualizar convidado.');
            }
        } catch (error) {
            console.error('Erro:', error);
            alert('Erro ao inserir / atualizar convidado.');
        }
    };

    return (
        <>
            <Center mt={5}>
                <Text fontSize={"xx-large"}>{query.id ? 'Editar Convidado' : 'Inserir Convidado'}</Text>
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
                                onChange={handlePhoneChange}
                                placeholder='Digite o telefone do convidado'
                                bgColor={"#f1f1f1"}
                            />
                        </FormControl>
                        <FormControl id="confirmed" mb={4}>
                            <FormLabel>Confirmado</FormLabel>
                            <Checkbox
                                isChecked={confirmed}
                                onChange={(e) => setConfirmed(e.target.checked)}
                                colorScheme="messenger"
                                size="lg"
                            >
                                {confirmed ? "Sim" : "Não"}
                            </Checkbox>
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
                                        <Checkbox
                                            isChecked={escort.confirmed}
                                            onChange={(e) => handleEscortChange(index, 'confirmed', e.target.checked)}
                                            colorScheme="messenger"
                                            size="lg"
                                        >
                                            {escort.confirmed ? "Sim" : "Não"}
                                        </Checkbox>
                                    </FormControl>
                                    <FormControl id={`escort-present-${index}`} mb={2}>
                                        <FormLabel>Presente</FormLabel>
                                        <Checkbox
                                            isChecked={escort.present}
                                            onChange={(e) => handleEscortChange(index, 'present', e.target.checked)}
                                            colorScheme="messenger"
                                            size="lg"
                                        >
                                            {escort.present ? "Sim" : "Não"}
                                        </Checkbox>
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
                                {query.id ? 'Editar Convidado' : 'Inserir Convidado'}
                            </Button>
                        </Center>
                    </form>
                </Box>
            </Center>
        </>
    );
}

export default InsertGuests;
