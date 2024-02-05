const Beatmaps = () => {
    return (
        <div class="p-4">
            <div class="rounded-lg bg-custom-950">
                <div class="flex flex-col gap-4 p-4 rounded-lg drop-shadow-lg bg-custom-900">
                    <div class="flex flex-row items-center justify-between p-4 text-xl rounded-lg bg-custom-950">
                        <div>Beatmap Search:</div>
                        <div class="flex flex-row items-center gap-2">
                            <button hx-post="/beatmaps">
                                Clear
                            </button>
                            <div class="tooltip" data-tip="Copy">
                                coppy
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-4 gap-4 p-4 rounded-lg drop-shadow-lg bg-custom-950">
                        <div class="col-span-4 md:col-span-2 lg:col-span-3">
                            <div class="mb-2 text-center">Title:</div>
                            title
                        </div>
                        <div class="col-span-4 md:col-span-2 lg:col-span-1">
                            <div class="mb-2 text-center">Mapper:</div>
                            mapper
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-2 p-4 pb-6 rounded-lg md:grid-cols-2 bg-custom-950">
                        <div class="flex flex-col gap-2">
                            sliders
                        </div>
                        <div class="flex flex-col gap-2">
                            sliders
                        </div>
                    </div>
                    <div class="grid grid-cols-3 gap-3">
                        <div class="flex flex-col col-span-3 gap-4 p-4 rounded-lg drop-shadow-lg md:col-span-1 bg-custom-950">
                            <div>Mode:</div>
                            <div class="flex flex-row flex-wrap gap-3" role="group">
                                modes
                            </div>
                        </div>
                        <div class="flex flex-col col-span-3 gap-4 p-4 rounded-lg drop-shadow-lg md:col-span-2 bg-custom-950">
                            <div>Status:</div>
                            <div class="flex flex-row flex-wrap items-center gap-3" role="group">
                                status
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-4 p-4 rounded-lg drop-shadow-lg bg-custom-950">
                        <div>Sort:</div>
                        <div class="flex flex-row flex-wrap gap-3">
                            sort
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-1 gap-4 p-4 rounded-lg lg:grid-cols-2 bg-custom-950">
                    list
                </div>
            </div>
        </div>
    )
}

export default Beatmaps;