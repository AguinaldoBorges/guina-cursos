import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Curso from "./views/Curso";
import NovoCurso from "./views/NovoCurso";
import Perfil from "./views/Perfil";


function RoutesApp() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Login />} path="/" exact />
				<Route element={<Dashboard />} path="/dashboard" exact />
				<Route element={<Curso />} path="/curso" exact />
				<Route element={<NovoCurso />} path="/adicionar-curso" exact />
				<Route element={<Perfil />} path="/meu-perfil" exact />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesApp;
