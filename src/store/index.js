import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const state = {
    loading: false,
    error: false,
    navigation: {},
    starships: {
        result: [],
        next: null,
        count: null
    },
    films: {
        result: [],
        next: null,
        count: null
    },
    people: {
        result: [],
        next: null,
        count: null
    },
    planets: {
        result: [],
        next: null,
        count: null
    },
    vehicles: {
        result: [],
        next: null,
        count: null
    },
    species: {
        result: [],
        next: null,
        count: null
    },
    active: null
}
const mutations = {
    SET_LOADING(state, payload) {
        state.loading = payload
    },
    SET_ERROR(state, payload) {
        state.error = payload
    },
    SET_NAVIGATION(state, payload) {
        state.navigation = payload
    },
    SET_LIST(state, { type, response }) {
        state[type].result.push(...response.results)
        state[type].count = response.count
        state[type].next = response.next
    },
    SET_ACTIVE(state, response) {
        state.active = response
    },
    CLEAR_ACTIVE(state) {
        state.active = null
    }
}
const actions = {
    INIT({ state, commit }) {
        commit('SET_LOADING', true)
        return api
            .get('https://swapi.co/api/?format=json')
            .then(response => {
                commit('SET_NAVIGATION', response)
                commit('SET_LOADING', false)
            })
            .catch(error => {
                commit('SET_ERROR', error)
                commit('SET_LOADING', false)
            })
    },
    GET_LIST({ state, commit }, { type, next }) {
        commit('SET_LOADING', true)
        let url = 'https://swapi.co/api/' + type + '/?format=json'
        if (next) url = next
        return api
            .get(url)
            .then(response => {
                commit('SET_LIST', { type, response })
                commit('SET_LOADING', false)
            })
            .catch(error => {
                commit('SET_ERROR', error)
                commit('SET_LOADING', false)
            })
    },
    GET_ITEM({ state, commit }, type) {
        commit('SET_LOADING', true)
        return api
            .get('https://swapi.co/api/' + type + '/' + state.route.params.id + '/?format=json')
            .then(response => {
                commit('SET_ACTIVE', response)
                commit('SET_LOADING', false)
            })
            .catch(error => {
                commit('SET_ERROR', error)
                commit('SET_LOADING', false)
            })
    }
}
const getters = {}

export default new Vuex.Store({ state, mutations, actions, getters })
