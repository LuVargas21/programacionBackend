import playerModel from "../schemas/player.schema.js";

class PlayerManager {
	playerModel;
	constructor() {
		this.playerModel = playerModel;
	}

	async getAllPlayers() {
		try {
			const players = await this.playerModel.find({});
			return players;
		} catch (error) {
			console.log(
				"🚀 ~ file: players.manager.js:14 ~ PlayerManager ~ getAllPlayers ~ error:",
				error
			);
		}
	}

	async getPlayerByID(id) {
		try {
			const playerData = await this.playerModel.findOne({ _id: id });
			return playerData;
		} catch (error) {
			console.log(
				"🚀 ~ file: players.manager.js:24 ~ PlayerManager ~ getPlayerByID ~ error:",
				error
			);
		}
	}

	async createPlayer(bodyPlayer) {
		try {

			
			const newPlayer = await this.playerModel.create(bodyPlayer);
			return newPlayer;
		} catch (error) {
			console.log(
				"🚀 ~ file: players.manager.js:37 ~ PlayerManager ~ createPlayer ~ error:",
				error
			);
		}
	}

	async updatePlayer(id, updateBodyPlayer) {
		try {
			const updatePlayer = await this.playerModel.updateOne(
				{ _id: id },
				updateBodyPlayer
			);
			return updatePlayer;
		} catch (error) {
			console.log(
				"🚀 ~ file: players.manager.js:44 ~ PlayerManager ~ updatePlayer ~ error:",
				error
			);
		}
	}

	async deletePlayerByID(id) {
		try {
			const playerDeleted = this.playerModel.deleteOne({ _id: id });
			return playerDeleted;
		} catch (error) {
			console.log(
				"🚀 ~ file: players.manager.js:55 ~ PlayerManager ~ deletePlayerByID ~ error:"
			);
		}
	}
}

export default PlayerManager;
