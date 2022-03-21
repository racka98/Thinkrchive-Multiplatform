package work.racka.thinkrchive.v2.desktop.ui.screens.details

import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import com.arkivanov.decompose.ComponentContext
import com.arkivanov.decompose.router.Router
import org.koin.core.parameter.parametersOf
import org.koin.java.KoinJavaComponent.inject
import states.details.ThinkpadDetailsSideEffect
import states.details.ThinkpadDetailsState
import work.racka.thinkrchive.v2.common.features.details.viewmodel.ThinkpadDetailsViewModel
import work.racka.thinkrchive.v2.desktop.ui.navigation.Component
import work.racka.thinkrchive.v2.desktop.ui.navigation.Configuration

class ThinkpadDetailsScreen(
    private val componentContext: ComponentContext,
    private val onBackClicked: () -> Unit,
    model: String
) : Component, ComponentContext by componentContext {

    private val viewModel: ThinkpadDetailsViewModel by inject(ThinkpadDetailsViewModel::class.java) {
        parametersOf(model)
    }

    @Composable
    fun Screen(
        modifier: Modifier = Modifier,
        router: Router<Configuration, Any>
    ) {


    }

    @Composable
    override fun render() {
        val state by viewModel.host.state.collectAsState()
        val sideEffect = viewModel.host.sideEffect
            .collectAsState(initial = ThinkpadDetailsSideEffect.EmptySideEffect)
            .value

        when (sideEffect) {
            is ThinkpadDetailsSideEffect.OpenPsrefLink -> {
                // To be implemented
            }
            is ThinkpadDetailsSideEffect.DisplayErrorMsg -> {
                //ShowToastInCompose(message = sideEffect.message)
            }
            is ThinkpadDetailsSideEffect.EmptySideEffect -> {}
        }

        if (state is ThinkpadDetailsState.State) {
            val thinkpad =
                (state as ThinkpadDetailsState.State).thinkpad

            ThinkpadDetailsScreenUI(
                thinkpad = thinkpad,
                onBackButtonPressed = onBackClicked,
                onExternalLinkClicked = {
                    viewModel.host.openPsrefLink()
                }
            )
        }
    }
}
