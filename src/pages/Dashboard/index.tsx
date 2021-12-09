import React from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Title, Form, Repositories } from "./styles";

const Dashboard: React.FC = () => {
    return (
        <>
            <Title>Explore repositórios no GitHub</Title>
            <Form>
                <input placeholder="Digite o nome do repositório..."/>
                <button type="submit">Pesquisar</button>
            </Form>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/83778311?v=4" alt="CarlosHolz" />
                    <div>
                        <strong>App-React</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quae sed animi asperiores molestias praesentium? Quaerat pariatur, cum corporis fugit veniam quam tempore, magnam, commodi deserunt quis hic? Ad, perferendis?</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/83778311?v=4" alt="CarlosHolz" />
                    <div>
                        <strong>App-React</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quae sed animi asperiores molestias praesentium? Quaerat pariatur, cum corporis fugit veniam quam tempore, magnam, commodi deserunt quis hic? Ad, perferendis?</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>

            <Repositories>
                <Link to="#">
                    <img src="https://avatars.githubusercontent.com/u/83778311?v=4" alt="CarlosHolz" />
                    <div>
                        <strong>App-React</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est quae sed animi asperiores molestias praesentium? Quaerat pariatur, cum corporis fugit veniam quam tempore, magnam, commodi deserunt quis hic? Ad, perferendis?</p>
                    </div>
                    <FiChevronRight />
                </Link>
            </Repositories>
        </>
    );
}

export default Dashboard