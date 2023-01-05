module.exports = function () {
    return {
        items: [
            {
                id: 1,
                name: "Тестовый предмет"
            },
        ],
        storages: [
            {
                id: 1,
                name: "Тестовый склад"
            }
        ],
        storage_item: [
            {
                id: 0,
                id_storage: 1,
                id_item: 1,
                count: 10
            }
        ]
    }
}