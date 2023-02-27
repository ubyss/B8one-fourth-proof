import { useLazyQuery } from '@apollo/client'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { MouseEvent } from 'react'
import { UserContext } from '../../Contexts/UserContext'

const ModalStepOne: React.FC<{setModalStep: Function}> = ({setModalStep}) => {

    const {clickedState} = useContext(UserContext)

    function selectState(e: MouseEvent){
        const target = e.target as HTMLElement
        const state = target.getAttribute('data-state')

        clickedState({variables: {
            input: {
                email: 'teste@hotmail.com',
                state
            }
        }})

        setModalStep(2)
    }


  return (
    <>
        <h2 className='modal-container__title'>Olá Trainee 😃, selecione seu Estado:</h2>
        <ul className='modal-container__states'>
            <li className="modal-container__state-link" data-state="AC" onClick={selectState}>Acre</li>
            <li className="modal-container__state-link" data-state="AL" onClick={selectState}>Alagoas</li>
            <li className="modal-container__state-link" data-state="AM" onClick={selectState}>Amazonas</li>
            <li className="modal-container__state-link" data-state="BA" onClick={selectState}>Bahia</li>
            <li className="modal-container__state-link" data-state="CE" onClick={selectState}>Ceará</li>
            <li className="modal-container__state-link" data-state="ES" onClick={selectState}>Espirito Santo</li>
            <li className="modal-container__state-link" data-state="GO" onClick={selectState}>Goiás</li>
            <li className="modal-container__state-link" data-state="MA" onClick={selectState}>Maranhão</li>
            <li className="modal-container__state-link" data-state="MT" onClick={selectState}>Mato Grosso</li>
            <li className="modal-container__state-link" data-state="MS" onClick={selectState}>Mato Grosso do Sul</li>
            <li className="modal-container__state-link" data-state="MG" onClick={selectState}>Minas Gerias</li>
            <li className="modal-container__state-link" data-state="PA" onClick={selectState}>Pará</li>
            <li className="modal-container__state-link" data-state="PB" onClick={selectState}>Paraíba</li>
            <li className="modal-container__state-link" data-state="PR" onClick={selectState}>Paraná</li>
            <li className="modal-container__state-link" data-state="PE" onClick={selectState}>Pernambuco</li>
            <li className="modal-container__state-link" data-state="PI" onClick={selectState}>Piauí</li>
            <li className="modal-container__state-link" data-state="RJ" onClick={selectState}>Rio de Janeiro</li>
            <li className="modal-container__state-link" data-state="RS" onClick={selectState}>Rio Grande do Sul</li>
            <li className="modal-container__state-link" data-state="RN" onClick={selectState}>Rio Grande do Norte</li>
            <li className="modal-container__state-link" data-state="RS" onClick={selectState}>Rio Grande do Sul</li>
            <li className="modal-container__state-link" data-state="RO" onClick={selectState}>Rondônia</li>
            <li className="modal-container__state-link" data-state="RR" onClick={selectState}>Roraima</li>
            <li className="modal-container__state-link" data-state="SC" onClick={selectState}>Santa Catarina</li>
            <li className="modal-container__state-link" data-state="SP" onClick={selectState}>São Paulo</li>
            <li className="modal-container__state-link" data-state="SE" onClick={selectState}>Sergipe</li>
            <li className="modal-container__state-link" data-state="TO" onClick={selectState}>Tocantins</li>
        </ul>
    </>
  )
}

export default ModalStepOne